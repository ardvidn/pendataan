import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_mezanin_pkey", ["kdDati2", "kdPropinsi", "simThnDbkbMezanin"], { unique: true })
@Entity("sim_dbkb_mezanin", { schema: "public" })
export class SimDbkbMezanin {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_dbkb_mezanin",
    length: 4,
  })
  simThnDbkbMezanin!: string;

  @Column("bigint", { name: "sim_nilai_dbkb_mezanin" })
  simNilaiDbkbMezanin!: string;
}
