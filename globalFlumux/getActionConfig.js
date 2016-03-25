
export default function(flumux) {
	let actionConfig = flumux.newActionConfig()
	actionConfig.addAction(`someFunc`)
	actionConfig.addReducer(`someFunc`)
	return actionConfig;
}
