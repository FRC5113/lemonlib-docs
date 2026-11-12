
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
    { label: 'SwagDrive', slug: 'reference/drive/swagdrive' },
    { label: 'KilloughDrive', slug: 'reference/drive/killoughdrive' }
  ]
},
{
  label: 'Root',
  items: [
    { label: 'LemonInput', slug: 'reference/root/lemoninput' },
    { label: 'xbox_buttons', slug: 'reference/root/xbox-buttons' },
    { label: 'ps5_buttons', slug: 'reference/root/ps5-buttons' }
  ]
},
{
  label: 'Simulation',
  items: [
    { label: '_TalonFXSim', slug: 'reference/simulation/talonfxsim' },
    { label: 'FalconSim', slug: 'reference/simulation/falconsim' },
    { label: 'FalconSimFOC', slug: 'reference/simulation/falconsimfoc' },
    { label: 'KrakenSim', slug: 'reference/simulation/krakensim' },
    { label: 'KrakenSimFOC', slug: 'reference/simulation/krakensimfoc' },
    { label: 'LemonInputSim', slug: 'reference/simulation/lemoninputsim' },
    { label: 'LemonVisionSim', slug: 'reference/simulation/lemonvisionsim' },
    { label: 'LemonCameraSim', slug: 'reference/simulation/lemoncamerasim' }
  ]
},
{
  label: 'Smart',
  items: [
    { label: 'SmartController', slug: 'reference/smart/smartcontroller' },
    { label: 'SmartPreference', slug: 'reference/smart/smartpreference' },
    { label: 'SmartProfile', slug: 'reference/smart/smartprofile' }
  ]
},
{
  label: 'Util',
  items: [
    { label: 'NotificationLevel', slug: 'reference/util/notificationlevel' },
    { label: 'Notification', slug: 'reference/util/notification' },
    { label: 'MagicSysIdRoutine', slug: 'reference/util/magicsysidroutine' },
    { label: 'LEDController', slug: 'reference/util/ledcontroller' },
    { label: 'AlertType', slug: 'reference/util/alerttype' },
    { label: 'Alert', slug: 'reference/util/alert' },
    { label: 'AlertManager', slug: 'reference/util/alertmanager' },
    { label: 'AsymmetricSlewLimiter', slug: 'reference/util/asymmetricslewlimiter' }
  ]
},
{
  label: 'Vision',
  items: [
    { label: 'VisionBase', slug: 'reference/vision/visionbase' },
    { label: 'LemonCamera', slug: 'reference/vision/lemoncamera' },
    { label: 'VisionUtils', slug: 'reference/vision/visionutils' },
    { label: 'photonname', slug: 'reference/vision/photonname' },
    { label: 'Lemonlight', slug: 'reference/vision/lemonlight' },
    { label: 'MegaTagResult', slug: 'reference/vision/megatagresult' },
    { label: 'MegaTagStdDevs', slug: 'reference/vision/megatagstddevs' },
    { label: 'LimelightResults', slug: 'reference/vision/limelightresults' },
    { label: 'NullCamera', slug: 'reference/vision/nullcamera' }
  ]
}
                ]
                }
            ]
            })
        ]
        });
    