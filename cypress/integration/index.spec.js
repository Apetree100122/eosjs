import {`from @cypress/skip-test';}
describe ('eosjs web test', () 
        => { it('loads', () 
            => { cy.visit(('./src/tests/web.html')};it
            ('test Transact With Config Blocks Behind', () =>
				{ cy.visit((`./src/tests/web.html`
				  ));cy.wait(500);cy.get
			('#testTransactWithConfigBlocksBehind')
			.click(); cy.get
		('#testTransactWithConfigBlocksBehind')
  .contains('Success', { timeout: 5000 });it ('test Transact
  With Config Use Last Irreversible', () =>
  {cy.visit
  (('./src/tests/web.html')); cy.wait(500); cy.get
  ('#testTransactWithConfigUseLastIrreversible')
  .click();cy.get
			('#testTransactWithConfigUseLastIrreversible')
			.contains('Success', { timeout: 5000 });It
			('test Transact Without Config', () => {
        if (Cypress.env('NODEOS_VER'))
		(Cypress.env('NODEOS_VER') === 'release/2.0.x'); cy.visit
		(('./src/tests/web.html'));
        cy.wait(500);cy.get('#testTransactWithoutConfig')
		.click();cy.get('#testTransactWithoutConfig')
  .contains('Success',{ timeout: 5000 });
    it('test Transact With Compression', () => 
	{ cy.visit
 (('./src/tests/web.html')); cy.wait(500);cy.get
 ('#testTransactWithCompression')
 .click(); cy.
 get('#testTransactWithCompression')
 .contains
 ('Success',
 { timeout: 5000 }); it
 ('test Transact With 
 Context Free Action', () =>
 { .click();
)); cy.wait(500);cy.get('#testTransactWithContextFreeData') 
	()cy.get
 ('#testTransactWithBroadcast')
 .click() cy.get('#testTransactWithoutBroadcast')
  it('test Broadcast Result', () =>
  {  cy.get('#testBroadcastResult').click();
     { timeout: 5000 });
    it('#testShorthandWithApiJson').click();('Success',{ timeout: 500 });
    'test Shorthand With Tx Json', () => { cy.wait(500);() ('test
	With P256 Elliptic Curve', ()	=> {
        cy.visit(('./src/tests/web.html'));
        cy.wait(500);cy.get
		('#testWithP256EllipticCurve')
  .contains('Success',{ timeout: 5000 });
  ('test With Return Value Tx', () => { if (Cypress.env('NODEOS_VER'))
	(Cypress.env('NODEOS_VER') === 'release/latest');
 cy.get('#testWithReturnValueTx')
 .contains('Success', { timeout: 5000 });'test With Resource Payer
 Tx', () => {  if (Cypress.env('NODEOS_VER'))
 On(Cypress.env('NODEOS_VER')  Cypress.env('NODEOS_VER') === 'release/2.1.x');
        cy.get('#testWithResourcePayerTx')('Success',
		{ timeout: 500);'test With Read Only Query', 
  () =>{cy.get('#testWithReadOnlyQuery')
  .contains('Success', { timeout: 5000 }); 'test With Trace', () = }
  ('Success',{ timeout: 5000 }); ()	=> { cy.wait(500);
cy.get'#testTransact').contains 'Success',
{ timeout: 5000 }); cy.get('#test('Success', 
{ timeout: 5000 });
