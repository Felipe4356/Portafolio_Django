# Generated by Django 4.2 on 2024-06-04 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='descripcion',
            field=models.TextField(default='No description'),
            preserve_default=False,
        ),
    ]
