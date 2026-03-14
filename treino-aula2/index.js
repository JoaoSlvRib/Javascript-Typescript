import express from 'express';
const app = express();
app.use(express.json());

app.post('/utils/sum-array', (req, res) => {
    const nums = req.body.nums;
    let sum = 0;
    if (Array.isArray(nums)) {
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
    } else {
        return res.status(400).json({ error: `Insira dados válidos para o array` });
    }
    res.status(200).json({ sum });
    return;
})

app.post('/utils/max-number', (req, res) => {
    const nums = req.body.nums;
    const max = Math.max(...nums);
    res.status(200).json({ max });
    return;
})

app.post('/utils/average', (req, res) => {
    const nums = req.body.nums;
    let sum = 0;
    if (Array.isArray(nums)) {
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
    } else {
        return res.status(400).json({ error: `Insira dados válidos para o array` });
    }
    const average = sum / nums.length;
    res.json({ average });
})

app.post('/utils/sort-array', (req, res) => {
    const nums = req.body.nums;
    if (Array.isArray(nums)) {
        const crescente = nums.sort((a, b) => a - b);
        res.status(200).json({ crescente });
        return;
    } else {
        return res.status(400).json({ error: `Insira dados válidos para o array` });
    }
})

app.post('/utils/remove-duplicates', (req, res) => {
    const nums = req.body.nums;
    if (Array.isArray(nums)) {
        const unico = [...new Set(nums)];
        res.status(200).json({ unico });
        return;
    } else {
        return res.status(400).json({ error: `Insira dados válidos para o array` });
    }
})

app.post('/utils/count-items', (req, res) => {
    const nums = req.body.nums;
    if (Array.isArray(nums)) {
        const i = nums.length;
        res.status(200).json({ i });
        return;
    } else {
        return res.status(400).json({ error: `Insira dados válidos para o array` });
    }
})

app.get('/utils/reverse-string', (req, res) => {
    const str = req.query.str;
    if (typeof str === 'string') {
        const result = str.split('').reverse().join('');
        res.status(200).json({ result });
        return;
    } else {
        return res.status(400).json({ error: `Insira dados válidos para a string` });
    }
})

app.post('/utils/count-words', (req, res) => {
    const str = req.body.str;
    if (typeof str === 'string') {
        const array = str.split(' ');
        const count = array.length;
        res.status(200).json({ count });
        return;
    } else {
        return res.status(400).json({ error: `Insira dados válidos para a string` });
    }
})

app.get('/utils/palindrome', (req, res) => {
    const str = req.query.str;
    if (typeof str === 'string') {
        const array = str.split('').reverse();
        const compara = array.join('') === str;
        res.status(200).json({ palindrome: compara });
        return;
    } else {
        return res.status(400).json({ error: `Insira dados válidos para a string` });
    }
})

app.get('/utils/camelCase', (req, res) => {
    const frase = req.query.frase;
    const array = frase.split(' ');
    let result = '';
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            result += array[i].toLowerCase();
        } else {
            result += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
        }
    }
    res.status(200).json({ camelCase: result });
    return;
})

app.get(`/utils/circle-area`, (req, res) => {
    const raio = Number(req.query.raio);
    if (typeof raio === 'number') {
    const area = (Math.PI * Math.pow(raio, 2)).toFixed(2);
    res.status(200).json({ area });
    return;
    }
})

app.get('/utils/fibonacci', (req, res) => {
    const n = Number(req.query.n);
    if (typeof n === 'number') {
    let F = [0, 1];
    for (let i = 2; i < n; i++) {
        F[i] = F[i - 1] + F[i - 2];
    }
    res.status(200).json({ fibonacci: F.slice(0, n) });
    return;
    }   
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})