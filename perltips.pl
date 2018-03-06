$a = "abcdefghijklmn\n";
$a .= "opqrtuvwxyz\n";

@lines = split(/\n/, $a);
for (@lines) {
	@a = $_ =~ /./g;
	print "@a\n";
}

$sample  = "| Dm7 G7 | Em7 A7|\n";
$sample .= "| D7 Db7 | Cmaj |\n";

# scalar(@a) --> @a‚Ì—v‘f”

C
C#,Db
D
D#,Eb
E
F
F#,Gb
G
G#,Ab
A
A#,Bb
B

