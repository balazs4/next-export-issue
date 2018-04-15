import Link from 'next/link';
export default ({ url }) => [
  <h2>Index</h2>,
  <pre>{JSON.stringify(url, null, 2)}</pre>
];
