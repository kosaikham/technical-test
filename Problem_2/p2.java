
/**
 * Definition for a InputPoint. class Point { int x; int y; Point() { x = 0; y =
 * 0; } Point(int a, int b) { x = a; y = b; } }
 */

class Solution {
    public int findSolution(InputPoint[] points) {
        // assign 0 to res variable and create a fresh hashMap
        int res = 0;
        Map<Integer, Map<Integer, Integer>> map = new HashMap<>();

        // Main Loop till the lenght of points
        for (int i = 0; i < points.length; i++) {
            // reset the map
            map.clear();

            // initial value for overlap points and max value
            int overlap = 0;
            int max = 0;

            // Secondary (inner loop) to go through the next points
            for (int j = i + 1; j < points.length; j++) {
                // find the difference between two points
                int x = points[j].x - points[i].x;
                int y = points[j].y - points[i].y;

                // if both x and y are zero, there must be overlapped , so just increase overlap
                // and jump to next iteration
                if (x == 0 && y == 0) {
                    overlap++;
                    continue;
                }

                // find the gcd of x and y
                int gcd = generateGCD(x, y);

                // if gcd != 0, transform x and y to simplest form
                if (gcd != 0) {
                    x /= gcd;
                    y /= gcd;
                }

                if (map.containsKey(x)) {
                    if (map.get(x).containsKey(y)) {
                        // found the straight line , so increase
                        map.get(x).put(y, map.get(x).get(y) + 1);
                    } else {
                        map.get(x).put(y, 1);
                    }
                } else {
                    // if x doesn't exist, create a new hashmap
                    Map<Integer, Integer> m = new HashMap<>();
                    m.put(y, 1);
                    map.put(x, m);
                }
                max = Math.max(max, map.get(x).get(y));
            }
            res = Math.max(res, max + overlap + 1);
        }
        return res;
    }

    private int generateGCD(int a, int b) {
        return (b == 0) ? a : generateGCD(b, a % b);
    }
}