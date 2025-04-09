<template>
    <div>
      <nav class="navbar navbar-dark bg-dark px-3">
        <a class="navbar-brand" href="#">Admin Panel</a>
      </nav>
  
      <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-md-2 bg-light vh-100 pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link">Dashboard</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/" class="nav-link">Đơn hàng</RouterLink>
              </li>
            </ul>
          </div>
  
          <!-- Main content -->
          <div class="col-md-10 p-4">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </template>
  