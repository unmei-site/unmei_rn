const padding = (a: number, b?: number, c?: number, d?: number) => ({
  paddingTop: a,
  paddingRight: b !== undefined ? b : a,
  paddingBottom: c !== undefined ? c : a,
  paddingLeft: d !== undefined ? d : (b !== undefined ? b : a)
});

export { padding };
