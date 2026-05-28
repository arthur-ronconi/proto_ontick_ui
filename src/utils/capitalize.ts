function capitalize(s: string) {
  try {
    if (!s.length) {
      throw new Error('String is empty');
    }
    return s[0]?.toUpperCase() + s.slice(1).toLowerCase();
  } catch (err) {
    return '[ERROR]';
  }
}

export default capitalize;
