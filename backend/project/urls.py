
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from user.views import CustomTokenObtainPairView

schema_view = get_schema_view(
    openapi.Info(
        title="FitTrackr API",
        default_version='v1',
        description="FitTrackr API.",
        terms_of_service="https://www.5a5a.ch/",
        contact=openapi.Contact(email="sascha@5a5a.ch"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
    path('backend/api/v1/admin/', admin.site.urls),

    path('backend/api/v1/user/', include('user.urls')),
    path('backend/api/v1/userprofile/', include('userprofile.urls')),

    path('backend/api/v1/auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/v1/auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('backend/api/v1/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/v1/docs/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
