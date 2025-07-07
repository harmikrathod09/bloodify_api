const express = require('express');

const router = express.Router();

// Example: Get all blood groups
router.get('/', (req, res) => {
    // Replace with actual DB call
    const bloodGroups = [
        { id: 1, name: 'A+' },
        { id: 2, name: 'A-' },
        { id: 3, name: 'B+' },
        { id: 4, name: 'B-' },
        { id: 5, name: 'AB+' },
        { id: 6, name: 'AB-' },
        { id: 7, name: 'O+' },
        { id: 8, name: 'O-' }
    ];
    res.json(bloodGroups);
});

// Example: Get a blood group by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Replace with actual DB call
    const bloodGroup = { id, name: 'A+' };
    res.json(bloodGroup);
});

// Example: Create a new blood group
router.post('/', (req, res) => {
    const { name } = req.body;
    // Replace with actual DB insert
    res.status(201).json({ id: 9, name });
});

// Example: Update a blood group
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // Replace with actual DB update
    res.json({ id, name });
});

// Example: Delete a blood group
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    // Replace with actual DB delete
    res.status(204).send();
});

module.exports = router;