.MODEL FLAT, STDCALL
.DATA
.CODE
_FindPath PROC endmatr:dword, begin:dword, a:ptr dword, weight:dword, d:ptr dword, ver:ptr dword, k:dword

START_WHILE:

mov eax, [endmatr]		; �������� � ������� eax �������� ��������� ������ - endmatr
cmp eax, [begin]		; ���������� �������� � ��������� �����
je END_WHILE			; ���� ��� ��� �����, �� ���� while �� �����������. ������� � ����� ����� 

FOR_START:

mov esi, 0				; � esi - ������� ����. (i)

FOR_LOOP:				; ����� ��� �������� ����� � ����� for

; =========== ���� ����� for ============

; if (a[i][end] != 0)   // ���� ����� ����

mov ebx, [a]			; ����� ������ �������
mov ecx, [endmatr]		; � ecx ����� ��������� �������� ������ ----------------------- � eax ��� ����� ��������� ��������!!!

push eax				; ��������� �������� eax � �����, ����� ����� �������
mov eax, 64				; � ������� eax - ����� 64 -> 4 ����� * 16 �������� �������
mul esi					; �������� esi �� eax -> ��������� � eax
add ebx, eax			; ���������� � ���������� ������ ������� a - ��������

pop eax

mov edx, dword ptr [ebx+ecx*4] ; ���������� � edx �������� ������ ������� a[i][end]
cmp edx, 0				; ��������� ������ ���������� ������� � ����� - ����� ����� ���� ������!!!
je ENDIF1				; ���� ����� ����, �� ����������� �� ������� IF, ���� �� �����, �� ����������� ���� if

; =========== ���� if 1============

push eax

;int temp = weight - a[i][end]; // ���������� ��� ���� �� ���������� �������

mov eax, [weight]
sub eax, edx		; eax - a[i][end];
mov edi, eax		; temp � edi

pop eax

; if (temp == d[i])

mov ebx, [d]		; ����� ������ ������� d
mov ecx, [ebx+esi*4]; �������� ������ d[i]
cmp edi, ecx		; if (temp == d[i])
jne ENDIF2

; =========== ���� if 2============


mov [weight], edi	; weight = temp

mov [endmatr], esi	 ; end = i

;ver[k] = i + 1

mov ebx, [ver]
mov ecx, esi
inc ecx
mov edx, [k]
mov [ebx+edx*4], ecx

;k++

inc edx
mov [k], edx

; =========== ���� if 2============

ENDIF2:

; =========== ���� if 1============

ENDIF1:

; =========== ���� ����� for ============

inc esi
cmp esi, 16				; ���������� �������� ��� ����� for - 16 ������ ��������, ������� ���������� � 16
jnz FOR_LOOP			; ���� �� ����� 16,�� ������� � FOR_LOOP ��� ��������
END_FOR:				; ���� esi = 16, �� ����� �� ����� for. ��� �������� ���������.
jmp START_WHILE			; ������� � ������ ����� while
END_WHILE:				; ����� ����� while

ret
_FindPath ENDP
END