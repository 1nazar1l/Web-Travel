from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)
    slug = models.CharField(max_length=70)
    icon_url = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Country(models.Model):
    name = models.CharField(max_length=70)
    short_desc = models.TextField()
    full_desc = models.TextField()
    image_name = models.CharField(max_length=100)
    rating = models.FloatField()
    category = models.ManyToManyField(Category)

    def __str__(self):
        return self.name
    
class Tour(models.Model):
    name = models.CharField(max_length=150)
    short_desc = models.TextField()
    full_desc = models.TextField()
    image_name = models.CharField(max_length=100)
    rating = models.FloatField()
    views = models.IntegerField()
    country = models.ForeignKey(Country, on_delete = models.CASCADE)
    category = models.ManyToManyField(Category)

    def __str__(self):
        return self.name