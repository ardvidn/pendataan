import { Column, Entity, Index } from "typeorm";

@Index("kayu_ulin_pkey", ["kdDati2", "kdPropinsi", "thnStatusKayuUlin"], {
  unique: true,
})
@Entity("kayu_ulin", { schema: "public" })
export class KayuUlin {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "thn_status_kayu_ulin",
    length: 4,
  })
  thnStatusKayuUlin!: string;

  @Column("smallint", { name: "status_kayu_ulin", default: () => "0" })
  statusKayuUlin!: number;
}
