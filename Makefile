install: 
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
even:
	npm run babel-node -- src/bin/brain-even.js
calc:
	npm run babel-node -- src/bin/brain-calc.js
gcd:
	npm run babel-node -- src/bin/brain-gcd.js
publish:
	npm publish
make lint:
	npm run eslint .
