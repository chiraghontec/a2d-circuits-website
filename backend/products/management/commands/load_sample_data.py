from django.core.management.base import BaseCommand
from products.models import Product

class Command(BaseCommand):
    help = 'Load sample products into the database'

    def handle(self, *args, **options):
        # Clear existing products
        Product.objects.all().delete()
        
        # Create sample products
        sample_products = [
            {
                'name': 'Arduino Uno R3',
                'description': 'A microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button.',
                'price': 29.99
            },
            {
                'name': 'Raspberry Pi 4 Model B',
                'description': 'A single-board computer with ARM Cortex-A72 quad-core processor, dual-band 802.11ac wireless networking, Bluetooth 5.0, full gigabit Ethernet, and PoE capability.',
                'price': 89.99
            },
            {
                'name': 'ESP32 Development Board',
                'description': 'A low-cost, low-power system on a chip microcontroller with integrated Wi-Fi and dual-mode Bluetooth. Perfect for IoT projects.',
                'price': 15.99
            },
            {
                'name': 'Breadboard Kit',
                'description': 'Complete breadboard kit with 830 tie points, jumper wires, resistors, LEDs, and other essential components for prototyping.',
                'price': 24.99
            },
            {
                'name': 'Servo Motor SG90',
                'description': 'Micro servo motor with 180-degree rotation, perfect for robotics projects. Includes mounting hardware and connection wires.',
                'price': 8.99
            },
            {
                'name': 'LCD Display 16x2',
                'description': '16x2 character LCD display with blue backlight. Compatible with Arduino and other microcontrollers via I2C or parallel interface.',
                'price': 12.99
            }
        ]
        
        for product_data in sample_products:
            product = Product.objects.create(**product_data)
            self.stdout.write(
                self.style.SUCCESS(f'Successfully created product: {product.name}')
            )
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully loaded {len(sample_products)} sample products')
        )
