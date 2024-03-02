
import GameSavingLoader from "../app.js";


test("тест работы функции GameSavingLoader", async () => {
    expect.assertions(1);
    const jsonAnswer = {
        id: 9,
        created: 1546300800,
        userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
    };

    try {
        const answer = await GameSavingLoader.load();
        expect(answer).toEqual(jsonAnswer);
    } catch (error) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error).toEqual("Error game saving!");
    }
})



// PASS  src/js/__tests__/app.test.js                                                                       
// √ тест работы функции GameSavingLoader (1527 ms)

// -----------|---------|----------|---------|---------|-------------------
// File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// -----------|---------|----------|---------|---------|-------------------
// All files  |      90 |      100 |   84.61 |   89.47 | 
// app.js     |   71.42 |      100 |   66.66 |   71.42 | 11,21
// parser.js  |     100 |      100 |     100 |     100 | 
// reader.js  |     100 |      100 |     100 |     100 | 
// -----------|---------|----------|---------|---------|-------------------
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        2.137 s