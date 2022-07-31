from django.urls import path
from . import views

urlpatterns = [
	path('', views.store, name="store"),
	path('about/', views.about, name="about"),
	path('cart/', views.cart, name="cart"),
	path('checkout/', views.checkout, name="checkout"),
	path('update_item/', views.updateItem, name="update_item"),
	path('process_order/',views.processOrder, name="process_order"),
	path("product_view/<int:myid>/", views.product_view, name="product_view"),
    path("search/", views.search, name="search"),
	path("tracker/", views.tracker, name="tracker"),
	path("register/", views.register, name="register"),
    #path("change_password/", views.change_password, name="change_password"),
    path("login/", views.Login, name="login"),
    path("logout/", views.Logout, name="logout"),
]
