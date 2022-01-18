describe('main.spec.ts', () => {
    let init: boolean = false;

    beforeEach(() => { init = true; });

    test('doit être initialisé', () => {
        expect(init).toBe(true);
    });
});
