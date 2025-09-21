export default function HomeScreen({ navigation }) {
  // Handler for off-course detection
  const handleOffCourse = () => {
    navigation.navigate('Alert');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Student!</Text>
      <View style={{ flex: 1, width: '100%' }}>
        <MapViewComponent onOffCourse={handleOffCourse} />
      </View>
      <Button title="Simulate Off-Course" onPress={() => navigation.navigate('Alert')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
});
