from rest_framework import serializers

from .models import User

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'name',
            'avatar_url'
        )

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'bio', 'avatar_url')