#include <iostream>
#include <queue>

using namespace std;
struct Pacient {
	int id;
	int priority;

	Pacient(int id, int priority) : id(id), priority(priority) {}
};

struct ComparePriority {
	bool operator()(Pacient &pacient1, Pacient &pacient2) {
		return pacient1.priority < pacient2.priority;
	}
};

int main() {
	priority_queue<Pacient, vector<Pacient>, ComparePriority> pq;

	// data received from data base (the information from the form and the application)
    // calculate de sum of the priorities of the criteria


	// getting data from the aplication
    //

	// printing the pacients in the right order
	Pacient p1(1, 100), p2(2, 150);
	pq.push(p1); pq.push(p2);

	while(!pq.empty()) {
		cout << pq.top().id << " ";
		pq.pop();
	}

}
