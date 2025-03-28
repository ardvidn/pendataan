import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";
import { DayaDukung } from "./DayaDukung";

@Index("c35_1_ak", ["kdDati2", "kdPropinsi", "thnDbkbDayaDukung", "typeKonstruksi"], { unique: true })
@Index("dbkb_daya_dukung_pkey", ["kdDati2", "kdPropinsi", "thnDbkbDayaDukung", "typeKonstruksi"], { unique: true })
@Index("c35_2_ak", ["kdDati2", "kdPropinsi", "thnDbkbDayaDukung", "typeKonstruksi"], { unique: true })
@Entity("dbkb_daya_dukung", { schema: "public" })
export class DbkbDayaDukung {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "thn_dbkb_daya_dukung",
    length: 4,
  })
  thnDbkbDayaDukung!: string;

  @Column("character", { primary: true, name: "type_konstruksi", length: 1 })
  typeKonstruksi!: string;

  @Column("bigint", { name: "nilai_dbkb_daya_dukung" })
  nilaiDbkbDayaDukung!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbDayaDukungs)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;

  @ManyToOne(() => DayaDukung, (dayaDukung) => dayaDukung.dbkbDayaDukungs)
  @JoinColumn([{ name: "type_konstruksi", referencedColumnName: "typeKonstruksi" }])
  typeKonstruksi2!: DayaDukung;
}
