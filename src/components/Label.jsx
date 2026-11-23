function Label({ text, x, y, size = 0.4 }) {
  return (
    <text x={x} y={y} fontSize={size}>
      {text}
    </text>
  );
}

export default Label;
