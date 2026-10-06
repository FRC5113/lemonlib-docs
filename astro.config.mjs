
        // @ts-check
        import { defineConfig } from 'astro/config';
        import starlight from '@astrojs/starlight';
        import node from '@astrojs/node';

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
                { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/frc5113/' }
            ],
            sidebar: [
                {
                label: 'Guides',
                items: [
                    { label: 'Install', slug: 'guides/install' }
                ]
                },
                {
                label: 'Reference',
                items: [
        {
  label: 'Drive',
  items: [
    { label: 'KilloughDrive', slug: 'reference/drive/killoughdrive' },
    { label: 'SwagDrive', slug: 'reference/drive/swagdrive' }
  ]
},
{
  label: 'Root',
  items: [
    { label: 'LemonInput', slug: 'reference/root/lemoninput' },
    { label: 'xbox_buttons', slug: 'reference/root/xbox-buttons' },
    { label: 'ps5_buttons', slug: 'reference/root/ps5-buttons' },
    { label: 'legion_buttons', slug: 'reference/root/legion-buttons' },
    { label: 'LemonCamera', slug: 'reference/root/lemoncamera' }
  ]
},
{
  label: 'Simulation',
  items: [
    { label: 'LemonInputSim', slug: 'reference/simulation/lemoninputsim' },
    { label: 'LemonVisionSim', slug: 'reference/simulation/lemonvisionsim' },
    { label: 'LemonCameraSim', slug: 'reference/simulation/lemoncamerasim' },
    { label: '_TalonFXSim', slug: 'reference/simulation/talonfxsim' },
    { label: 'FalconSim', slug: 'reference/simulation/falconsim' },
    { label: 'FalconSimFOC', slug: 'reference/simulation/falconsimfoc' },
    { label: 'KrakenSim', slug: 'reference/simulation/krakensim' },
    { label: 'KrakenSimFOC', slug: 'reference/simulation/krakensimfoc' }
  ]
},
{
  label: 'Smart',
  items: [
    { label: 'SmartPreference', slug: 'reference/smart/smartpreference' },
    { label: 'SmartController', slug: 'reference/smart/smartcontroller' },
    { label: 'SmartProfile', slug: 'reference/smart/smartprofile' }
  ]
},
{
  label: 'Util',
  items: [
    { label: 'LEDController', slug: 'reference/util/ledcontroller' },
    { label: 'AsymmetricSlewLimiter', slug: 'reference/util/asymmetricslewlimiter' },
    { label: 'AlertType', slug: 'reference/util/alerttype' },
    { label: 'Alert', slug: 'reference/util/alert' },
    { label: 'AlertManager', slug: 'reference/util/alertmanager' },
    { label: 'MagicSysIdRoutine', slug: 'reference/util/magicsysidroutine' },
    { label: 'MotorControllerGroup', slug: 'reference/util/motorcontrollergroup' },
    { label: 'NotificationLevel', slug: 'reference/util/notificationlevel' },
    { label: 'Notification', slug: 'reference/util/notification' }
  ]
}
                ]
                }
            ]
            })
        ]
        });
    