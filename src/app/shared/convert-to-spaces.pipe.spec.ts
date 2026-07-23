import { ConvertToSpaces } from './convert-to-spaces.pipe';

describe('ConvertToSpaces Pipe', () => {
  let pipe: ConvertToSpaces;

  beforeEach(() => {
    pipe = new ConvertToSpaces();
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should replace dashes with spaces', () => {
    expect(pipe.transform('ABC-123', '-')).toBe('ABC 123');
  });

  it('should replace underscores with spaces', () => {
    expect(pipe.transform('ABC_123', '_')).toBe('ABC 123');
  });

  it('should replace commas with spaces', () => {
    expect(pipe.transform('Angular,React', ',')).toBe('Angular React');
  });

  it('should return the original string when the character is not found', () => {
    expect(pipe.transform('Angular', '-')).toBe('Angular');
  });

  it('should replace only the first occurrence (replace)', () => {
    expect(pipe.transform('A-B-C-D', '-')).toBe('A B-C-D');
  });

  it('should return an empty string when the input is empty', () => {
    expect(pipe.transform('', '-')).toBe('');
  });

  it('should handle strings containing spaces', () => {
    expect(pipe.transform('Angular-14 Course', '-')).toBe('Angular 14 Course');
  });

  it('should handle numeric strings', () => {
    expect(pipe.transform('2024-2025', '-')).toBe('2024 2025');
  });

  it('should handle special characters', () => {
    expect(pipe.transform('A#B#C', '#')).toBe('A B#C');
  });
});