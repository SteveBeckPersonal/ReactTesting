beforeEach(() => {
    return new Promise((resolve, reject) => {
      window.addEventListener('DOMContentLoaded', () => {
        resolve();
      });
    });
  });