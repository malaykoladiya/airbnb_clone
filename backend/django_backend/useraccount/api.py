from .serializers import UserDetailSerializer, UserProfileSerializer

from .models import User
from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from property.serializers import ReservationListSerializer

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def landlord_details(requests, pk):
    user = User.objects.get(pk=pk)
    serializer = UserDetailSerializer(user, many=False)

    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def reservations_list(request):
    reservations = request.user.reservations.all()
    serializer = ReservationListSerializer(reservations, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'PUT'])
@authentication_classes([])
@permission_classes([])
def user_profile(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'})

    if request.method == 'GET':
        serializer = UserProfileSerializer(user, many=False)
        return JsonResponse(serializer.data, safe=False)
    
    if request.method == 'PUT':
        serializer = UserProfileSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            if 'avatar' in request.data:
                user.avatar.delete(save=False)
            serializer.save()
            return JsonResponse(serializer.data, safe = False)
        return JsonResponse(serializer.errors)