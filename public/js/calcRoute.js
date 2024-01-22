//Traveling Salesman Problem

function euclideanDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function calculateTotalDistance(route) {
  let totalDistance = 0;
  for (let i = 0; i < route.length - 1; i++) {
    const currentClient = route[i];
    const nextClient = route[i + 1];
    totalDistance += euclideanDistance(
      currentClient.addressX,
      currentClient.addressY,
      nextClient.addressX,
      nextClient.addressY
    );
  }
  return totalDistance;
}

function findOptimalRoute(clients) {
  const permutations = permute(clients);
  let optimalRoute = permutations[0];
  let minDistance = calculateTotalDistance(optimalRoute);

  for (let i = 1; i < permutations.length; i++) {
    const currentDistance = calculateTotalDistance(permutations[i]);
    if (currentDistance < minDistance) {
      minDistance = currentDistance;
      optimalRoute = permutations[i];
    }
  }

  return optimalRoute;
}

// Função para gerar todas as permutações possíveis
function permute(arr) {
  const result = [];

  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function generate(n, array) {
    if (n === 1) {
      result.push(array.slice());
      return;
    }

    for (let i = 0; i < n - 1; i++) {
      generate(n - 1, array);
      if (n % 2 === 0) {
        swap(array, i, n - 1);
      } else {
        swap(array, 0, n - 1);
      }
    }
    generate(n - 1, array);
  }

  generate(arr.length, arr.slice());
  return result;
}
