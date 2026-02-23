
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
  label: 'Ctre',
  items: [
    { label: 'LemonPigeon', slug: 'reference/ctre/lemonpigeon' },
    { label: 'LemonTalonFX', slug: 'reference/ctre/lemontalonfx' }
  ]
},
{
  label: 'Drive',
  items: [
    { label: 'KilloughDrive', slug: 'reference/drive/killoughdrive' },
    { label: 'Vector2d', slug: 'reference/drive/vector2d' },
    { label: 'SwagDrive', slug: 'reference/drive/swagdrive' }
  ]
},
{
  label: 'Funnies',
  items: [
    { label: 'Funnycontrollers', slug: 'reference/funnies/funnycontrollers' }
  ]
},
{
  label: 'Grapple',
  items: [
    { label: 'LaserCAN', slug: 'reference/grapple/lasercan' },
    { label: 'LaserCanMeasurement', slug: 'reference/grapple/lasercanmeasurement' },
    { label: 'LaserCanRoi', slug: 'reference/grapple/lasercanroi' },
    { label: 'MitoCANdria', slug: 'reference/grapple/mitocandria' }
  ]
},
{
  label: 'Lemonbot',
  items: [
    { label: 'LemonRobot', slug: 'reference/lemonbot/lemonrobot' },
    { label: 'LemonComponent', slug: 'reference/lemonbot/lemoncomponent' },
    { label: 'LemonRobot', slug: 'reference/lemonbot/lemonrobot' }
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
    { label: 'LemonCameraSim', slug: 'reference/simulation/lemoncamerasim' },
    { label: 'FalconSim', slug: 'reference/simulation/falconsim' },
    { label: 'FalconSim', slug: 'reference/simulation/falconsim' },
    { label: 'FalconSimFOC', slug: 'reference/simulation/falconsimfoc' },
    { label: 'KrakenSim', slug: 'reference/simulation/krakensim' },
    { label: 'KrakenSimFOC', slug: 'reference/simulation/krakensimfoc' },
    { label: 'LemonInputSim', slug: 'reference/simulation/lemoninputsim' },
    { label: 'KilloughDriveSim', slug: 'reference/simulation/killoughdrivesim' }
  ]
},
{
  label: 'Smart',
  items: [
    { label: 'SmartProfile', slug: 'reference/smart/smartprofile' },
    { label: 'SmartController', slug: 'reference/smart/smartcontroller' },
    { label: 'SmartMotorControllerTelemetry', slug: 'reference/smart/smartmotorcontrollertelemetry' },
    { label: 'SmartMotorControllerTelemetryConfig', slug: 'reference/smart/smartmotorcontrollertelemetryconfig' },
    { label: 'SmartMotorControllerCommandRegistry', slug: 'reference/smart/smartmotorcontrollercommandregistry' },
    { label: 'SimSupplier', slug: 'reference/smart/simsupplier' },
    { label: 'SmartMotorController', slug: 'reference/smart/smartmotorcontroller' },
    { label: 'BooleanTelemetryField', slug: 'reference/smart/booleantelemetryfield' },
    { label: 'DoubleTelemetryField', slug: 'reference/smart/doubletelemetryfield' },
    { label: 'SmartPreference', slug: 'reference/smart/smartpreference' },
    { label: 'SmartMotorControllerConfigurationException', slug: 'reference/smart/smartmotorcontrollerconfigurationexception' },
    { label: 'MechanismGearing', slug: 'reference/smart/mechanismgearing' },
    { label: 'SmartMotorControllerTelemetryConfig', slug: 'reference/smart/smartmotorcontrollertelemetryconfig' },
    { label: 'TelemetryVerbosity', slug: 'reference/smart/telemetryverbosity' },
    { label: 'MotorMode', slug: 'reference/smart/motormode' },
    { label: 'ControlMode', slug: 'reference/smart/controlmode' },
    { label: 'SmartMotorControllerOptions', slug: 'reference/smart/smartmotorcontrolleroptions' },
    { label: '_BasicOptions', slug: 'reference/smart/basicoptions' },
    { label: '_ExternalEncoderOptions', slug: 'reference/smart/externalencoderoptions' },
    { label: 'SmartMotorControllerConfig', slug: 'reference/smart/smartmotorcontrollerconfig' },
    { label: 'SmartNT', slug: 'reference/smart/smartnt' }
  ]
},
{
  label: 'Util',
  items: [
    { label: 'AlertType', slug: 'reference/util/alerttype' },
    { label: 'Alert', slug: 'reference/util/alert' },
    { label: 'AlertManager', slug: 'reference/util/alertmanager' },
    { label: 'OneWaySlewRateLimiter', slug: 'reference/util/onewayslewratelimiter' },
    { label: 'NotificationLevel', slug: 'reference/util/notificationlevel' },
    { label: 'Notification', slug: 'reference/util/notification' },
    { label: 'Notifier', slug: 'reference/util/notifier' },
    { label: 'MagicSysIdRoutine', slug: 'reference/util/magicsysidroutine' },
    { label: 'AsymmetricSlewLimiter', slug: 'reference/util/asymmetricslewlimiter' },
    { label: 'LEDController', slug: 'reference/util/ledcontroller' }
  ]
}
                ]
                }
            ]
            })
        ]
        });
    