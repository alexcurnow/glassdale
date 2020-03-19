export const WitnessStatement = witnessObject => {
  return `
    <fieldset class="witnessStatement">
      <h3>Witness Name: ${witnessObject.name}</h3>
      <p>Statments: ${witnessObject.statements}</p>
    </fieldset>
  `
}