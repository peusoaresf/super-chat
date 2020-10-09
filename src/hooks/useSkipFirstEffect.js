import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function useSkipFirstEffect(callback, dependencies) {
  const navigation = useNavigation();
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const unsubFocus = navigation.addListener('focus', () => {
      setFirstRender(false);
    });

    const unsubBlur = navigation.addListener('blur', () => {
      setFirstRender(true);
    });

    return () => {
      unsubFocus();
      unsubBlur();
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (!firstRender) {
        callback();
      }
    }, dependencies)
  );
}