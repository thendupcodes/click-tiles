const mod = (n: number, m: number): number => {
	return ((n % m) + m) % m;
};

export default mod;
