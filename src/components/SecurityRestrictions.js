import { useEffect, useRef } from 'react';
import './SecurityRestrictions.css';

const SecurityRestrictions = () => {
  // Use refs to track key states across events
  const keyState = useRef({
    ctrlKey: false,
    shiftKey: false,
    metaKey: false, // Windows key
    altKey: false
  });

  useEffect(() => {
    // Disable right click
    const handleRightClick = (e) => {
      e.preventDefault();
      alert("Right-clicking is disabled on Marvel Snaps website to protect our content.");
      return false;
    };

    // Track key down events to monitor modifier keys
    const handleKeyDown = (e) => {
      // Update key state
      keyState.current.ctrlKey = e.ctrlKey;
      keyState.current.shiftKey = e.shiftKey;
      keyState.current.metaKey = e.metaKey; // Windows key
      keyState.current.altKey = e.altKey;

      // Disable Ctrl+Shift+I (inspect element)
      // Disable Ctrl+Shift+C (inspect element selector)
      // Disable Ctrl+S (save)
      // Disable Ctrl+U (view source)
      // Disable Ctrl+P (print, which could be used to save as PDF)
      // Disable F12 (developer tools)
      // Disable PrintScreen (various combinations)
      
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.key === 'P' || e.key === 'p' || e.key === 'U' || e.key === 'u')) ||
        (e.key === 'F12') ||
        (e.key === 'PrintScreen') ||
        (keyState.current.metaKey && e.key === 'PrintScreen') // Windows + PrintScreen
      ) {
        e.preventDefault();
        alert("This action has been disabled to protect our content.");
        return false;
      }
    };

    // Clear key state when keys are released
    const handleKeyUp = (e) => {
      if (e.key === 'Control') keyState.current.ctrlKey = false;
      if (e.key === 'Shift') keyState.current.shiftKey = false;
      if (e.key === 'Meta') keyState.current.metaKey = false; // Windows key
      if (e.key === 'Alt') keyState.current.altKey = false;
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
      }
    };

    // Disable drag and drop of images
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Additional handler for blur events to reset key state
    const handleBlur = () => {
      // Reset all key states when window loses focus
      keyState.current = {
        ctrlKey: false,
        shiftKey: false,
        metaKey: false,
        altKey: false
      };
    };
    
    window.addEventListener('blur', handleBlur);

    // Cleanup event listeners when component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SecurityRestrictions;