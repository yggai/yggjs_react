import { htmlTemplate } from '../../templates/files/html';

describe('htmlTemplate', () => {
  it('should have correct path', () => {
    expect(htmlTemplate.path).toBe('index.html');
  });

  it('should be valid HTML5 document', () => {
    expect(htmlTemplate.content).toContain('<!doctype html>');
    expect(htmlTemplate.content).toContain('<html lang="en">');
  });

  it('should have required meta tags', () => {
    expect(htmlTemplate.content).toContain('<meta charset="UTF-8" />');
    expect(htmlTemplate.content).toContain('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
  });

  it('should have root div element', () => {
    expect(htmlTemplate.content).toContain('<div id="root"></div>');
  });

  it('should include main script', () => {
    expect(htmlTemplate.content).toContain('<script type="module" src="/src/main.tsx"></script>');
  });

  it('should have Vite favicon', () => {
    expect(htmlTemplate.content).toContain('<link rel="icon" type="image/svg+xml" href="/vite.svg" />');
  });

  it('should have appropriate title', () => {
    expect(htmlTemplate.content).toContain('<title>Vite + React + TS</title>');
  });
});
