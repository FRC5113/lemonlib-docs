// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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
								{lable: "FalconSim", slug: 'reference/falconsim'}
							]
						}
					]
				},
			],
		}),
	],
});
