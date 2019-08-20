interface ICache {
  [key: string]: any;
}

export default function SimpleCache(
  max?: number
): {
  has: (key: string | number) => boolean;
  remove: (key: string | number) => void;
  get: (key: string | number) => any;
  set: (key: string | number, value: any) => void;
  clear: () => void;
  size: () => number;
  keys: () => string[];
  dump: () => ICache;
};
