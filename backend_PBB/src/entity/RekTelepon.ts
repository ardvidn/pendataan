import { Column, Entity, Index } from "typeorm";

@Index("rek_telepon_pkey", ["bulanKeTelepon", "kdArea", "noTelepon", "thnTelepon"], { unique: true })
@Index("telepon_rek_telepon_fk", ["kdArea", "noTelepon"], {})
@Entity("rek_telepon", { schema: "public" })
export class RekTelepon {
  @Column("character", { primary: true, name: "kd_area", length: 4 })
  kdArea!: string;

  @Column("character", { primary: true, name: "no_telepon", length: 8 })
  noTelepon!: string;

  @Column("character", { primary: true, name: "thn_telepon", length: 4 })
  thnTelepon!: string;

  @Column("character", { primary: true, name: "bulan_ke_telepon", length: 2 })
  bulanKeTelepon!: string;

  @Column("bigint", { name: "tagihan_telepon", nullable: true })
  tagihanTelepon!: string | null;
}
