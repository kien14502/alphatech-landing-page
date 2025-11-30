'use client';

import {useEffect, useState} from 'react';

/**
 * Hook to detect if the device is mobile
 * Monitors window resize and returns true if viewport width < 768px (md breakpoint)
 * Safely handles server-side rendering by returning false on the server
 */
const MOBILE_BREAKPOINT = 768;

export function useMobile(): boolean {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isClient, setIsClient] = useState<boolean>(false);

	useEffect(() => {
		// Mark that we're on the client now
		setIsClient(true);
	}, []);

	useEffect(() => {
		// Only run on client-side
		if (typeof window === 'undefined' || !isClient) {
			return;
		}

		const checkMobile = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};

		// Check on mount
		checkMobile();

		// Listen for window resize
		window.addEventListener('resize', checkMobile, {passive: true});

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	}, [isClient]);

	// Return false on server, actual value on client
	if (!isClient) {
		return false;
	}

	return isMobile;
}
