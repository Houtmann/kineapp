# Generated by Django 3.0.5 on 2020-05-02 12:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Exercice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_creation', models.DateTimeField(auto_created=True)),
                ('name', models.CharField(max_length=200, verbose_name='Nom')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Description')),
            ],
            options={
                'verbose_name': 'Exercice',
                'verbose_name_plural': 'Exercices',
            },
        ),
        migrations.CreateModel(
            name='ExerciceRoutine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serie', models.PositiveIntegerField(blank=True, null=True, verbose_name='Series')),
                ('rep', models.PositiveIntegerField(blank=True, null=True, verbose_name='Repetitions')),
                ('description', models.TextField(blank=True, null=True)),
                ('ris', models.DurationField(blank=True, null=True)),
                ('exercice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kine.Exercice')),
            ],
            options={
                'verbose_name': 'Exercice Routine',
                'verbose_name_plural': 'Exercice Routines',
            },
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('type', models.CharField(choices=[('Video', 'Video'), ('Photo', 'Photo')], max_length=200)),
                ('file', models.FileField(blank=True, null=True, upload_to='')),
                ('date_creation', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Variante',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Description')),
                ('materiel', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_creation', models.DateTimeField(auto_created=True)),
                ('name', models.CharField(max_length=200, verbose_name='Nom du programme')),
                ('description', models.TextField(verbose_name='Description')),
                ('type', models.CharField(choices=[('Traitement', 'Traitement'), ('Post-Traitement', 'Post Traitement')], max_length=200)),
                ('exercices', models.ManyToManyField(through='kine.ExerciceRoutine', to='kine.Exercice')),
            ],
            options={
                'verbose_name': 'Programme',
                'verbose_name_plural': 'Programmes',
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(blank=True, max_length=10, null=True, verbose_name='Téléphone')),
                ('is_active', models.BooleanField(default=False)),
                ('programs', models.ManyToManyField(blank=True, null=True, to='kine.Program')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL, verbose_name='Utilisateur')),
            ],
            options={
                'verbose_name': 'Patient',
                'verbose_name_plural': 'Patient',
            },
        ),
        migrations.AddField(
            model_name='exerciceroutine',
            name='program',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kine.Program'),
        ),
        migrations.AddField(
            model_name='exercice',
            name='media',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='kine.Media'),
        ),
        migrations.AddField(
            model_name='exercice',
            name='variantes',
            field=models.ManyToManyField(to='kine.Variante'),
        ),
    ]
