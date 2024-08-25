function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Routes>
            {/* Public Routes */}
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />

            {/* Protected Routes */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
