const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'tutorial.json'
);

const getTutorialsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Tutorial {
    // Model contain 4 property’s { id, title, description, published }
    constructor(id, title, description, published) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.published = published;
    }

    save() {
        getTutorialsFromFile(Tutorials => {
            if (this.id) {
                const existingTutorialIndex = Tutorials.findIndex(
                    prod => prod.id === this.id
                );
                const updatedTutorials = [...Tutorials];
                updatedTutorials[existingTutorialIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedTutorials), err => {
                    console.log(err);
                });
            } else {
                this.id = (new Date()).getTime().toString();
                Tutorials.push(this);
                fs.writeFile(p, JSON.stringify(Tutorials), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteById(id) {
        getTutorialsFromFile(Tutorials => {
            const updatedTutorials = Tutorials.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updatedTutorials), err => {
            });
        });
    }

    static fetchAll(cb) {
        getTutorialsFromFile(cb);
    }

    static findById(id, cb) {
        getTutorialsFromFile(Tutorials => {
            const Tutorial = Tutorials.find(p => p.id === id);
            cb(Tutorial);
        });
    }
};