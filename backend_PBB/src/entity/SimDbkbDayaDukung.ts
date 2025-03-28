import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_daya_dukung_pkey", ["kdDati2", "kdPropinsi", "simThnDbkbDayaDukung", "typeKonstruksi"], { unique: true })
@Entity("sim_dbkb_daya_dukung", { schema: "public" })
export class SimDbkbDayaDukung {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_dbkb_daya_dukung",
    length: 4,
  })
  simThnDbkbDayaDukung!: string;

  @Column("character", { primary: true, name: "type_konstruksi", length: 1 })
  typeKonstruksi!: string;

  @Column("bigint", { name: "sim_nilai_dbkb_daya_dukung" })
  simNilaiDbkbDayaDukung!: string;
}
