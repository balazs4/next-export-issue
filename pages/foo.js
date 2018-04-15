export default ({ url }) => (
  <div>
    <h2>Foo</h2>
    <pre>{JSON.stringify(url, null, 2)}</pre>
  </div>
);
