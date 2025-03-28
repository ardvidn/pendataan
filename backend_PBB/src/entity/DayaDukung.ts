import { Column, Entity, Index, OneToMany } from "typeorm";
import { DatJpb3 } from "./DatJpb3";
import { DatJpb8 } from "./DatJpb8";
import { DbkbDayaDukung } from "./DbkbDayaDukung";

@Index("daya_dukung_pkey", ["typeKonstruksi"], { unique: true })
@Entity("daya_dukung", { schema: "public" })
export class DayaDukung {
  @Column("character", { primary: true, name: "type_konstruksi", length: 1 })
  typeKonstruksi!: string;

  @Column("integer", { name: "daya_dukung_lantai_min_dbkb" })
  dayaDukungLantaiMinDbkb!: number;

  @Column("integer", { name: "daya_dukung_lantai_max_dbkb" })
  dayaDukungLantaiMaxDbkb!: number;

  @OneToMany(() => DatJpb3, (datJpb3) => datJpb3.typeKonstruksi)
  datJpbs!: DatJpb3[];

  @OneToMany(() => DatJpb8, (datJpb8) => datJpb8.typeKonstruksi)
  datJpbs2!: DatJpb8[];

  @OneToMany(() => DbkbDayaDukung, (dbkbDayaDukung) => dbkbDayaDukung.typeKonstruksi2)
  dbkbDayaDukungs!: DbkbDayaDukung[];
}
