#include <string>
using namespace std;
#include <vector>
#include <time.h>

class Car {
private:
	string Name;
	double MaxSpeed=0;//������������ ��������-������� ��� �������� �������,�� ����� ��������.
	double Speed=0;//������� ��������-�������� � �������/��������� ��� Upload,�� ������ ������������
	double Massa=0;//�������� ��� ��������, ��������� ����� ����.
	int CountPeople=0;//���������� ����� � ������, ��������� ����� � ������ ������
	int MaxPeople=0;//���� �����, �������� ��� �������� �������
	double MaxFuel=0;//������������ ����� ����, �������� ��� ��������/�� �������� � �����������;
	double Fuel=0;//������� �����.
	double PowerReserve=0;//����� ����.
	double FuelConsum=6.9;//������ �������. ��������.

public:
	Car(string Name="Lada granta",int MaxSpeed =200, int Massa =1400,int MaxPeople =20, int MaxFuel =100) {
		this->MaxSpeed = MaxSpeed;
		this->Name = Name;
		this->Massa = Massa;
		this->MaxPeople = MaxPeople;
		this->MaxFuel = MaxFuel;
	}
	~Car() {}
	//set/get
	void SetSpeed(double Speed) {
		this->Speed = Speed;
	}
	void SetMassa(double  Massa) {
		this->Massa = Massa;
	}
	void SetCountPeople(int  CountPeople) {
		this->CountPeople = CountPeople;
	}
	void SetFuel(double Fuel) {
		this->Fuel = Fuel;
	}
	void SetMaxPeople(int MaxPeople) {
		this->MaxPeople = MaxPeople;
	}
	void SetPowerReserve(double PowerReserve) {
		this->PowerReserve = PowerReserve;
	}
	void SetFuelConsum(double FuelConsum) {
		this->FuelConsum = FuelConsum;
	}
	void SetName(string Name) {
		this->Name = Name;
	}
	string GetName() {
		return Name;
	}
	double GetMaxSpeed() {
		return MaxSpeed;
	}
	double GetMaxFuel() {
		return MaxFuel;
	}	
	double GetSpeed() {
		return Speed;
	}	
	double GetMassa() {
		return Massa;
	}	
	double GetFuel() {
		return Fuel;
	}	
	double GetPowerReserve() {
		return PowerReserve;
	}
	double GetFuelConsum() {
		return FuelConsum;
	}
	int GetCountPeople() {
		return CountPeople;
	}
	int GetMaxPeople() {
		return MaxPeople;
	}
	//����������� �������
	virtual double CalPowerReserve() {
		PowerReserve = Fuel / FuelConsum; 
		return PowerReserve;
	}
	virtual int CalPeople(int People) {
		CountPeople += People;
		if (CountPeople > MaxPeople) {
			int Raznos = CountPeople -MaxPeople;
			CountPeople = MaxPeople;
			return Raznos;
		}
		else if (CountPeople < 0) {
			CountPeople = 0;
		}
		return 0;
	}
	virtual void Info() {
		cout << "���������� � ������:" << endl;
		cout << "��������: "+Name << endl;
		cout << "��������������������: "+ to_string(MaxPeople) << endl;
		cout << "������� ���������� ����� � ������: "+ to_string(CountPeople) << endl;
		cout << "������ �����: "+ to_string(Massa) << endl;
		cout << "������ �������, �/100 ��: ������� ����: "+ to_string(FuelConsum) << endl;
		cout << "������������ ��������, ��/�: "+ to_string(MaxSpeed) << endl;
		cout << "����� ����: "+ to_string(MaxFuel) << endl;
		cout << "����� ����: "+ to_string(PowerReserve) << endl;


	}
};


class Airplane :public Car {
private:
	int MaxHeight;//������������ ������
	int NumberEngine ;//���������� ������
	int AirplaneType; //��� ��������.0-������������;1-�������;2-��������;3-�������;
public:
	Airplane(string Name, int Massa, int MaxPeople, int MaxFuel, int MaxHeight=1200, int NumberEngine=4, int AirplaneType=0 ) : Car(Name, 0, Massa, MaxPeople, MaxFuel)
	{
		this->MaxHeight = MaxHeight;
		this->NumberEngine = NumberEngine;
		this->AirplaneType = AirplaneType;
		SetFuelConsum(6800);
	}
	~Airplane() {}
	//get/set
	int GetMaxHeight() {
		return MaxHeight;
	}
	int GetNumberEngine() {
		return NumberEngine;
	}
	string GetAirplaneType() {
		switch (AirplaneType)
		{
		case 0: {
			return  "������������";
		}
		case 1: {
			return "�������";
		}
		case 2: {
			return  "��������";
		}
		case 3: {
			return  "�������";

		}
		default:
			break;
		}
	}
	void SetMaxHeight(int MaxHeight) {
		this->MaxHeight = MaxHeight;
	}
	void SetNumberEngine(int NumberEngine) {
		this->NumberEngine = NumberEngine;
	}
	void SetTrailerConnect(int AirplaneType) {
		this->AirplaneType = AirplaneType;
	}
	//����������� �������
	 double CalPowerReserve() {
		double PowerReserveAirplane = GetFuel() / GetFuelConsum();
		switch (AirplaneType)
		{
		case 0: {
			PowerReserveAirplane *= 0.75;
		}
		case 1: {
			PowerReserveAirplane *= 0.6;
		}
		case 2: {
			PowerReserveAirplane *= 1.2;
		}
		case 3: {
			PowerReserveAirplane *= 1.8;
		}
		default:
			break;
		}
		SetPowerReserve(PowerReserveAirplane);
		return PowerReserveAirplane;
	}
	 void MaxPeopleAir() {
		 int Max = GetMaxPeople();
		 switch (AirplaneType)
		 {
		 case 0: {
			 Max += 120;
			 break;
		 }
		 case 1: {
			 Max = 20;
			 break;
		 }
		 case 2: {
			 Max = 10;
		 }
		 case 3: {
			 Max = 15;
		 }
		 default:
			 break;
		 }
		 SetMaxPeople(Max);
	 }
	 int CalPeople(int People) {
		int CountPeopleTrack = GetCountPeople();
		int CountPeopleTrack2 = GetCountPeople();
		int Max = GetMaxPeople();
		CountPeopleTrack += People;
			if (CountPeopleTrack > Max ) {
				CountPeopleTrack = Max;
			}else if(CountPeopleTrack < 0){
				CountPeopleTrack = 0;
			}
		SetCountPeople(CountPeopleTrack);
		int Paznos = (People - CountPeopleTrack - CountPeopleTrack2);
		return Paznos;
	}
	 void Info() {
		cout << "���������� � ������:" << endl;
		cout << "��������: " + GetName() << endl;
		cout << "��������������������: " + to_string(GetMaxPeople()) << endl;
		cout << "������� ���������� ����� � ������: " + to_string(GetCountPeople()) << endl;
		cout << "������ �����: " + to_string(GetMassa()) << endl;
		cout << "������ �������, �/100 ��: ������� ����: " + to_string(GetFuelConsum()) << endl;
		cout << "������������ ��������, ��/�: " + MaxSpeedType() << endl;
		cout << "����� ����: " + to_string(GetMaxFuel()) << endl;
		cout << "����� ����: " + to_string(GetPowerReserve()) << endl;
		cout << "���������� ����������: " + to_string(NumberEngine) << endl;
		cout << "������������ ������: " + to_string(MaxHeight) << endl;
		cout << "��� ��������: " + GetAirplaneType() << endl;
		cout << "����������� ����� ������ �: " + BandWidth() << endl;
		cout << "��� �����: " + TypeThings() << endl;
	}
	//���� �������(3 �����)
	//1)������ ������������ ��������, ������ �� ���������� ������.
	//2)������ ����������� ����� ������, ������ �� ���������� ������.
	//3)��� ����� ����������� ���������, ������ �� ���������� ������ � ����.
	string MaxSpeedType() {
		
			switch (NumberEngine)
			{
			case 2: {
				return  "800";
			}
			case 3: {
				return "1000";
			}
			case 4: {
				return  "1200";
			}
			case 6: {
				return  "1500";
			}
			default: return  "3000";
				break;
			}
	}
	string BandWidth() {
		switch (NumberEngine)
		{
		case 2: {
			return  "1850";
		}
		case 3: {
			return "2000";
		}
		case 4: {
			return  "2300";
		}
		case 6: {
			return  "2580";
		}
		default: return  "3000";
			break;
		}
	}
	string TypeThings() {
		switch (AirplaneType)
		{
		case 0: {
			return  "����� � ����";
		}
		case 1: {
			return "������� ���� � �������";
		}
		case 2: {
			return  "���� ������ ����";
		}
		case 3: {
			return  "�����";
		}
		default:
			break;
		}
	}
};
class Truck :public Car {
private:
	bool TrailerConnect = false;//����������� �� ������ � ���������
	int NumberAxes = 4;//���������� ���� �� ������
	int TrailerType ;//0-������� ����;1-������� �������������;2-������� �������� �������� ���������;3-������� �������;
public:
	Truck(string Name, int MaxSpeed, int Massa, int MaxPeople , int MaxFuel,bool TrailerConnect, int NumberAxes, int TrailerType=0) : Car(Name, MaxSpeed, Massa, MaxPeople, MaxFuel)
	 {
		this->TrailerConnect = TrailerConnect;
		this->NumberAxes = NumberAxes;
		this->TrailerType = TrailerType;
		SetFuelConsum(36);
	}
	~Truck() {}
	//get/set
	bool GetTrailerConnect() {
		return TrailerConnect;
	}
	int GetNumberAxes() {
		return NumberAxes;
	}
	string GetTrailerTyp() {
		switch (TrailerType)
		{
		case 0: {
			return  "����";
		}
		case 1: {
			return "�������������";
		}
		case 2: {
			return  "�������� �������� ���������";
		}
		case 3: {
			return  "������� �������";
		}
		default:
			break;
		}
	}
	void SetTrailerConnect() {
		TrailerConnect = !TrailerConnect;
	}
	void SetNumberAxes(int NumberAxes) {
		this->NumberAxes = NumberAxes;
	}
	void SetTrailerType(int TrailerType) {
		this->TrailerType = TrailerType;
	}
	//����������� �������
	 double CalPowerReserve() {
		double PowerReserveTrack = GetFuel() / GetFuelConsum();
		if (TrailerConnect) {
			switch (TrailerType)
			{
			case 0: {
				PowerReserveTrack *= 0.9;
			}
			case 1: {
				PowerReserveTrack *= 0.8;
			}
			case 2: {
				PowerReserveTrack *= 1.2;
			}
			case 3: {
				PowerReserveTrack *= 1.5;
			}
			default:
				break;
			}
		}
		SetPowerReserve(PowerReserveTrack);
		return PowerReserveTrack;
	}
	 void Max() {
		 int Max = GetMaxPeople();
		 switch (TrailerType)
		 {
		 case 0: {
			 Max += 60;
		 }
		 case 1: {
			 Max += 2;
		 }
		 case 2: {
			 Max += 15;
		 }
		 case 3: {
			 Max += 20;
		 }
		 default:
			 break;
		 }
		 SetMaxPeople(Max);
	 }
	 int CalPeople(int People) {
		int CountPeopleTrack = GetCountPeople();
		CountPeopleTrack += People;
		int CountPeopleTrack2 = GetCountPeople();
		int Max = GetMaxPeople();
		if (TrailerConnect) {
			switch (TrailerType)
			{
			case 0: {
				Max += 60;
			}
			case 1: {
				Max += 2;
			}
			case 2: {
				Max += 15;
			}
			case 3: {
				Max += 20;
			}
			default:
				break;
			}

		}
			if (CountPeopleTrack > Max) {
					CountPeopleTrack = Max;
		}
			else if (CountPeopleTrack < 0) {
				CountPeopleTrack = 0;
			}
		SetCountPeople(CountPeopleTrack);
		int Paznos = (People - CountPeopleTrack - CountPeopleTrack2);
		return Paznos;
		return 0;
	}
	void Info() {
		cout << "���������� � ������:" << endl;
		cout << "��������: " + GetName() << endl;
		cout << "��������������������: " + to_string(GetMaxPeople()) << endl;
		cout << "������� ���������� ����� � ������: " + to_string(GetCountPeople()) << endl;
		cout << "������ �����: " + to_string(GetMassa()) << endl;
		cout << "������ �������, �/100 ��: ������� ����: " + to_string(GetFuelConsum()) << endl;
		cout << "������������ ��������, ��/�: " + to_string(GetMaxSpeed()) << endl;
		cout << "����� ����: " + to_string(GetMaxFuel()) << endl;
		cout << "����� ����: " + to_string(GetPowerReserve()) << endl;
		cout << "���������� ����: " + to_string(NumberAxes) << endl;
		string Flag = TrailerConnect ? "��" : "���";
		cout << "����������� ������: " + Flag << endl;
		if (TrailerConnect) {
			cout << "��� �������: " + GetTrailerTyp() << endl;
		}
		cout << "������������ ��������� � ����� ������ ��� �������� 10 ��/�: " + CoefAdhesion() << endl;
		cout << "����������� ������ ������ ��� �������: " + Minlength() << endl;
		cout << "��� �����,������� �� ������ ����������: " + TypeThings() << endl;
	}
	//���� ������� (3 �����)
	//1)������ ������������ ���������, ������ �� ���������� ����.
	//2)������ ����������� ������ ������, ������ �� ���� �����.
	//3)����� ���� ���� ����� ���������� ��������, ������ �� ���� �����.
	string CoefAdhesion() {
		if (TrailerConnect) {
			switch (TrailerType)
			{
			case 0: {
				return  "0.74";
			}
			case 1: {
				return "0.73";
			}
			case 2: {
				return  "0.72";
			}
			case 3: {
				return  "0.76";
			}
			default:
				break;
			}
		}
		else {
			return  "0.75";
		}
	}
	string Minlength() {
		if (TrailerConnect) {
			switch (TrailerType)
			{
			case 0: {
				return  "21�170��";
			}
			case 1: {
				return "19�910��";
			}
			case 2: {
				return  "21�170��";
			}
			case 3: {
				return  "24�297��";
			}
			default:
				break;
			}
		}
		else {
			return  "7 270��";
		}
	}
	string TypeThings() {
		if (TrailerConnect) {
			switch (TrailerType)
			{
			case 0: {
				return  "���";
			}
			case 1: {
				return "����������";
			}
			case 2: {
				return  "�������,���������";
			}
			case 3: {
				return  "�������,������";
			}
			default:
				break;
			}
		}
		else {
			return  "������,��� ����";
		}
	}

};
