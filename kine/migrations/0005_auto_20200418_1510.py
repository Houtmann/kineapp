# Generated by Django 3.0.5 on 2020-04-18 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kine', '0004_auto_20200418_1509'),
    ]

    operations = [
        migrations.AlterField(
            model_name='program',
            name='type',
            field=models.CharField(choices=[('Traitement', 'Traitement'), ('Post-Traitement', 'Post Traitement')], max_length=200),
        ),
    ]
