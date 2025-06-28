// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone'
	}),
	integrations: [
		starlight({
			title: 'LemonLib documentation',
			favicon: '/lemons.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/FRC5113/LemonLib' }, 
				{ icon: 'instagram', label: 'Instagram', href: "https://www.instagram.com/frc5113/"}
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Install', slug: 'guides/install' },
					],
				},
				{
					label: 'Reference',
					items: [
						{label: 'CTRE',
							items: [
							{label: "LemonPigeon", slug: 'reference/pigeon'},
							{label: "LemonTalonFX ", slug: 'reference/talonfx'}
							]
						},
						{ label: "Drive", items: [
							{label: "KilloughDrive (kiwi)", slug: 'reference/kiwi'}
						]},
						{
							label: "lemonbot", items: [
								{label: "LemonRobot", slug: 'reference/lemonrobot'}
							]
						},
						{
							label: "Sim", items: [
								{label: "FalconSim", slug: 'reference/falconsim'},
								{label: "KilloughSim (Kiwi sim)", slug: 'reference/kiwisim'},
								{label: "LemonCamSim", slug: 'reference/lemoncamsim'},
								{label: "LemonInputSim", slug: 'reference/lemoninputsim'}
							]
						},
						{
							label: "Util", items: [
								{label: "AlertType", slug: 'reference/alerttype'},
								{label: "Alert", slug: 'reference/alert'},
								{label: "AlertManager", slug: 'reference/alertm'},
								{label: "LedController", slug: 'reference/ledcontroler'}
							]
						}
					]
				},
			],
		}),
	],
});
