# Generated by Django 3.0.5 on 2020-04-19 14:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('kine', '0008_auto_20200419_1632'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercice',
            name='media',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='kine.Media'),
        ),
    ]
